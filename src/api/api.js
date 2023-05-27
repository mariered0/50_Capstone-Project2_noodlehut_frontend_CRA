import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class NoodleHutApi {
    //the token
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //passing an authorization token.
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${NoodleHutApi.token}`};
        const params = (method === "get")
            ? data
            : {};

        try{
            console.log('a request was made!')
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err){
            console.error("API Error:", err.response);

            //Need to be fixed later
            let message = err.response;
            //this checks if the message is array or not
            throw Array.isArray(message) ? message: [message];
        }
    }

    //Individual API routes

    /** Register a new user */
    static async signup(data) {
        let res = await this.request('auth/register', data, "post");
        return res.token;
    }

    /** Login user */
    static async login (data) {
        let res = await this.request('auth/token', data, "post");
        return res.token;
    }

    /** Get current user info */

    static async currentUser (username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    /** Update (current) user profile info */

    static async updateCurrentUserProf (username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }

    /** Get the list of categories */

    static async getCategories(){
        let res = await this.request('categories')
        return res.categories;
    }

    /** Get the list of all menu items */
    
    static async getAllItems() {
        let res = await this.request('items')
        console.log('res:', res);
        return res.items;
    }


    /**
     * APIs restricted to admins
     * 
     */

    /** Get all users data - only for admin users  */

    static async getUsers(data) {
        let res = await this.request(`users`, data)
        return res.users;
    }

    /** Get  */



}

// for now, put token (test_admin / password on the class)
NoodleHutApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RfYWRtaW4iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2ODM1OTYxNzB9.BiqU4PbrDaWXQGd4xZyelNGCUjWc61pX8R9vbuGUlX4"

export default NoodleHutApi;