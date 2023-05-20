import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
        
                <NavBar></NavBar>

                <hr />

            <div class="bg-gray-900 p-4">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p class="text-gray-300">Answer:
An access token and refresh token are commonly used in authentication and authorization protocols
Access Token:  A secure string that a client uses to access protected resources. An instance issues access tokens to clients that have a valid authorization grant. Each access token has a specific scope, lifespan, and other attributes. It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period.
Refresh token: A credential that a client uses to obtain new access tokens without requiring additional user authorization. An instance issues a refresh token to a client when it is first authorized to have an access token. The refresh token is used to generate a new access token.
When a client application makes a request to an API endpoint, it includes the access token in the request headers or as a parameter. The server verifies the access token to ensure that the user is authenticated and authorized to access the requested resource. If the access token is valid and has not expired, the server processes the request and returns the requested data or performs the requested action on behalf of the user.
When an access token expires, the client application can send a request to the authentication server with the refresh token. If the refresh token is valid and not expired, the server responds with a new access token. This process is known as token refresh or token renewal. The client application can then continue to use the new access token to access protected resources on behalf of the user.
Two options for client-side token storage: localStorage and cookies. The two have different purposes, and hence different strengths and weaknesses. Cookies are intended to be read by the server, whereas localStorage can only be read by the browser.
</p>
                </div>
            </div>
               <hr />

              <div class="bg-gray-900 p-4">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">2. Compare SQL and NoSQL databases?</h1>
                    <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend quam sit amet semper faucibus. Morbi pellentesque mattis sem sed cursus. Integer bibendum tellus eu libero mollis, id vestibulum ex faucibus. Fusce ullamcorper neque et augue aliquam, et fringilla urna volutpat. Vestibulum pharetra justo nisl, vitae finibus ante blandit a. Nunc a efficitur leo, ut placerat elit. Aliquam tincidunt lectus vel lorem pharetra vulputate. Aliquam et ultricies nunc, eu ultrices lectus. Ut in nulla sem. Cras non arcu ac sem vestibulum dignissim. Fusce elementum congue diam, in lobortis erat fringilla in. Sed lobortis nisl et magna dignissim, eu viverra tortor pellentesque.</p>
                </div>
            </div>
               <hr />

              <div class="bg-gray-900 p-4">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">Title</h1>
                    <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend quam sit amet semper faucibus. Morbi pellentesque mattis sem sed cursus. Integer bibendum tellus eu libero mollis, id vestibulum ex faucibus. Fusce ullamcorper neque et augue aliquam, et fringilla urna volutpat. Vestibulum pharetra justo nisl, vitae finibus ante blandit a. Nunc a efficitur leo, ut placerat elit. Aliquam tincidunt lectus vel lorem pharetra vulputate. Aliquam et ultricies nunc, eu ultrices lectus. Ut in nulla sem. Cras non arcu ac sem vestibulum dignissim. Fusce elementum congue diam, in lobortis erat fringilla in. Sed lobortis nisl et magna dignissim, eu viverra tortor pellentesque.</p>
                </div>
            </div>
              <hr />


              <div class="bg-gray-900 p-4">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">Title</h1>
                    <p class="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend quam sit amet semper faucibus. Morbi pellentesque mattis sem sed cursus. Integer bibendum tellus eu libero mollis, id vestibulum ex faucibus. Fusce ullamcorper neque et augue aliquam, et fringilla urna volutpat. Vestibulum pharetra justo nisl, vitae finibus ante blandit a. Nunc a efficitur leo, ut placerat elit. Aliquam tincidunt lectus vel lorem pharetra vulputate. Aliquam et ultricies nunc, eu ultrices lectus. Ut in nulla sem. Cras non arcu ac sem vestibulum dignissim. Fusce elementum congue diam, in lobortis erat fringilla in. Sed lobortis nisl et magna dignissim, eu viverra tortor pellentesque.</p>
                </div>
            </div>
              <hr />

              <Footer></Footer>

        </div>
    );
};

export default Blog;