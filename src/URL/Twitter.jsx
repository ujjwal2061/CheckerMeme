
import React, { useEffect, useState } from "react"; 
import { TwitterApi } from "twitter-api-v2";

function Twitter(props) {
  const client = new TwitterApi(process.env.REACT_APP_BEARER_TOKEN); 

  async function checkusername() {
    try {
      // Fetch user by username using Twitter API
      const response = await client.v2.userByUsername(props.name, {
        "user.fields": ["name"],
      });

      if (response && response.data) {
        const fetchedName = response.data.name;
        console.log("Username is:", fetchedName);
        matchusername(fetchedName);
      } else {
        setMessage("User not found.");
        console.log("User not found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error fetching user data."); 
    }
  }

  // Function to check if the fetched username matches the entered username
  function matchusername(fetchedName) {
    if (fetchedName.toLowerCase() === props.name.toLowerCase()) {
      console.log("Username matches:", fetchedName);
      setMessage(`Username "${fetchedName}" matches!`); // Set message for a match
    } else {
      console.log("Can't find the username.");
      setMessage(`Username "${props.name}" does not match.`); // Set message for no match
    }
  }


  useEffect(() => {
    if (props.name) {
      const fetchUser = async () => {
        await checkusername();
      };
      fetchUser();
    }
  }, [props.name]);

  return (
    <>
      <div>
        <p>{props.joke}</p>
        <p>{message}</p> 
      </div>
    </>
  );
}

export default Twitter;
