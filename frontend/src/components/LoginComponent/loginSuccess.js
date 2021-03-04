//Imports
import React from 'react'

//Content for when the log in form has succesfully been validated thorugh backend with mysql db and submitted
const success = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request!</div>
            {/* Image shown to replace log in form to confirm succesful submmission before redirect occurs. */}
            <img src="images/img-49.svg"
            alt="Success Image"
            className="form-img-2"/>
            {/* Script to redirect user after sucessful sign in (redirects to dashboard page after 1000ms) */}
            <script type="text/javascript">
                function Redirect() {
                    window.setTimeout( function () {
                        window.location="http://localhost:3000/dashboard";
                    }, 1000)
                };
            </script>
        </div>
    )
};

export default success