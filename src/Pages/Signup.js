import * as React from 'react';
import './signup.css';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { NavLink } from 'react-router-dom';



function Signup() {
    const [value, setValue] = React.useState(new Date());
    
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title"> Sign up</h2>
                            <form className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="father-name">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    <input type="text" name="father-name" id="father-name" autoComplete="off" placeholder="Father Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Mother-name">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    <input type="text" name="Mother-name" id="Mother-name" autoComplete="off" placeholder="Mother Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="CNIC">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    <input type="num" name="CNIC" id="CNIC" autoComplete="off" placeholder="XXXXX-XXXXXXX-X" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cnic-issue-date">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    issue date
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            views={['year', 'month']}
                                            minDate={new Date('1947-01-01')}
                                            maxDate={new Date('2022-12-31')}
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cnic-expiry-date">
                                        <i class="zmdi zmdi-account material-icons-name" ></i>
                                    </label>
                                    expiry date
                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                        <DatePicker 
                                            views={['year', 'month']}
                                            minDate={new Date('1947-01-01')}
                                            maxDate={new Date('2022-12-31')}
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                        />

                                    </LocalizationProvider>
                                </div>
                                <div className="form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register"/>
                                    <NavLink to="/Login" className="login-link">I am already register</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;