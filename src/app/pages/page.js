"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/signup.module.css";


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    gender: ''
  });
  const [message, setMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Sign Up Successful!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      day: '',
      month: '',
      year: '',
      gender: ''
    });
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for a new account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.header}>
          <Image src="/facebook.png" alt="Facebook" width={300} height={500} />
        </div>
        <div className={styles.signupContainer}>
          <div className={styles.text}>
            <h2>Create a new account</h2>
            <p>It&apos;s quick and easy.</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameField}>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.textInput}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Surname"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.textInput}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Mobile number or email address"
              value={formData.email}
              onChange={handleChange}
              className={styles.textInput}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="New password"
              value={formData.password}
              onChange={handleChange}
              className={styles.textInput}
              required
            />
            <label htmlFor="birthday" className={styles.label}>
              Date of birth
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className={styles.tooltip}>
                <em>Tell us about your birthday. This information helps us to provide a better experience, including showing age-appropriate content.</em>
              </span>
            </label>
            <div className={styles.birthdaySelection}>
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Day</option>
                {[...Array(31).keys()].map(day => (
                  <option key={day + 1} value={day + 1}>{day + 1}</option>
                ))}
              </select>
              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Month</option>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Year</option>
                {[...Array(20).keys()].map(year => (
                  <option key={2024 - year} value={2024 - year}>{2024 - year}</option>
                ))}
              </select>
            </div>
            <label htmlFor="gender" className={styles.label}>
              Gender
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className={styles.tooltip}>
                <em>Select the gender you identify with. This helps us to personalize your experience.</em>
              </span>
            </label>
            <div className={styles.genderSelection}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
            <button type="submit" className={styles.button}>Sign Up</button>
            {message && <div className={styles.message}>{message}</div>} 
            <div className={styles.terms}>
              By clicking Sign Up, you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Data Policy</a>.
            </div>
            <a href="#" className={styles.loginLink}>Already have an account? Log In</a>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
