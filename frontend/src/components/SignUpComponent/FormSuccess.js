import React from 'react'

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request!</div>
            <img src="images/img-49.svg"
            alt="Success Image"
            className="form-img-2"/>
            <script type="text/javascript">
                function Redirect() {
                    window.setTimeout( function () {
                        window.location="http://localhost:3000/login";
                    }, 1000)
                };
            </script>
        </div>
    )
}

export default FormSuccess
