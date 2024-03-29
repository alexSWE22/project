import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Booking.scoped.css";
import axios from "axios";

import PopUp from "./PopUp";
const Booking = () => {
	const { state } = useLocation();
	const doctors = state;
	const [Appointment, SetAppointment] = useState({
		doctorId: -1,
		patientId: doctors.patient.id,
		date: "",
		period: "",
		price: "",
	});
	const [popupBtn, setBtn] = useState(false);
	const Form = (doctor) => {
		setBtn(true);
		const appointment = { ...Appointment };
		appointment.doctorId = parseInt(doctor.id);
		appointment.price = parseInt(doctor.consultationPrice);
		SetAppointment(appointment);
		console.log(Appointment);
	};
	const makeAppointment = (e) => {
		e.preventDefault();
		setBtn(false);
		console.log(Appointment);
		axios.post("/makeAppointment", Appointment).then((response) => {
			const res = response.data;
			alert(res.description);
		});
	};

	return (
		<div
			style={{
				fontSize: "62.5%",
				overflowX: "hidden",
				scrollPaddingTop: "7rem",
				height: "100vh",
				scrollBehavior: "smooth",
				background: `url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=2000")`,
				backgroundColor: "white",
			}}>
			<section className='doctors' id='doctors'>
				<h1 className='heading'>
					Best <span>doctors</span> for{" "}
					{doctors.doctors[0].specialization}
				</h1>
				<div className='box-container'>
					{doctors.doctors.map((doc) => (
						<div
							className='box'
							key={doc.id}
							id={doc.id}
							onClick={() => Form(doc)}>
							<span className='pic'>
								<i className='fas fa-user-md' />
							</span>
							<h3>{doc.name}</h3>
							<span>
								consultation price : {doc.consultationPrice}$
							</span>
							<div className='share'>
								<a href='' className='fab fa-facebook-f' />
								<a href='' className='fab fa-twitter' />
								<a href='' className='fab fa-linkedin' />
								<a href='' className='fab fa-instagram' />
							</div>
						</div>
					))}
				</div>

				<PopUp trigger={popupBtn} setTrigger={setBtn}>
					<h1 className='form-h1'>pick date:</h1>
					<input
						type='date'
						className='date-form'
						onChange={(e) => {
							const appointment = { ...Appointment };
							appointment.date = e.target.value;
							SetAppointment(appointment);
						}}
					/>
					<br />
					<br />
					<h1 className='form-h1'>pick hour:</h1>
					<select
						name='Specializtion'
						id='specialization'
						className='date-form'
						onChange={(e) => {
							const appointment = { ...Appointment };
							appointment.period = e.target.value;
							SetAppointment(appointment);
							console.log(Appointment);
						}}>
						<option value=''>Hour</option>
						<option value='12-1'>12-1</option>
						<option value='1-2'>1-2</option>
						<option value='2-3'>2-3</option>
						<option value='3-4'>3-4</option>
						<option value='4-5'>4-5</option>
					</select>

					<br />
					<br />
					<h1 className='form-h1'>Accepted Cards</h1>

					<div className='icon-container'>
						<i
							className='fab fa-cc-visa'
							style={{ color: "navy", marginRight: "5px" }}
						/>
						<i
							className='fab fa-cc-mastercard'
							style={{ color: "red", marginRight: "5px" }}
						/>
						<i
							className='fab fa-cc-amazon-pay'
							style={{ marginRight: "5px" }}
						/>
						<i
							className='fab fa-cc-amex'
							style={{ color: "blue", marginRight: "5px" }}
						/>

						<i
							className='fa fa-cc-discover'
							style={{ color: "orange" }}
						/>
					</div>

					<input
						type='number'
						placeholder='your card number'
						className='box-form'
					/>
					<br />
					<br />
					<button
						className='submit-app'
						onClick={(e) => makeAppointment(e)}>
						Confirm Appointment
					</button>
				</PopUp>
			</section>
		</div>
	);
};

export default Booking;
