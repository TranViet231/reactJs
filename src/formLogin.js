import {useState} from "react";

export default function FormLogin() {
    const [formData, setFormData] = useState({
        isPersonal: true,
        email: '',
        name: '',
        password: '',
        gender: 'Male',
    });

    return (
        <div className="container"
            style={{width: '500px'}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"
                        style={{textAlign: 'center'}}>Registration</h5>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="accountType"
                                checked={true}
                            />
                            <label className="form-check-label" htmlFor="personal">
                                Personal
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                            />
                            <label className="form-check-label" htmlFor="company">
                                Company
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>

                        <input
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={true}
                            />
                            Male
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="gender"
                            />
                            Female
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>

                    <p>
                        By clicking Register, you agree on our <a href="#">Privacy Policy for W3Docs.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}