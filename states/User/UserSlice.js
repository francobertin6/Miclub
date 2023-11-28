
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "User",
    initialState : [],
    reducers: {
        async data(state, action){

            await fetch("http://127.0.0.1:8080/userDB/current",{
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + JSON.stringify(localStorage.getItem("JWT"))
                }
            })
            .then( async (res) => {

                state.push( res );

            })
            .catch( (err) => {

                console.log(err);

            })

        } 
    }
});


export const { data } = UserSlice.actions;
export default UserSlice.reducer;