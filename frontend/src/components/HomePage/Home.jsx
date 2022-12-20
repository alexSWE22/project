import "./Home.scoped.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Home = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const patient = state;
	const [bookingInfo, setInfo] = useState({
		name: "",
		email: "",
		number: "",
		specialization: "",
	});
	const handleInfo = (e) => {
		const user = { ...bookingInfo };
		user[e.target.id] = e.target.value;
		setInfo(user);
		console.log(bookingInfo);
	};

	const sendInfo = (e) => {
		axios
			.post("/searchBySpecialization", bookingInfo.specialization)
			.then((response) => {
				const res = { doctors: response.data, patient: patient };
				console.log(res);
				navigate("/booking", { state: res });
			});
		e.preventDefault();
	};

	return (
		<div className='ggg'>
			<div class='header'>
				<a href='#' class='logo'>
					<i class='fas fa-heartbeat' /> medcare.
				</a>
				<nav class='navbar'>
					<a href='#home'>home</a>
					<a href='#services'>services</a>
					<a href='#about'>about</a>
					<a href='#doctors'>doctors</a>
					<a href='#book'>book</a>
					<a href='#review'>review</a>
					<a href='#blogs'>blogs</a>
				</nav>
				<div id='menu-btn' class='fas fa-bars' />
			</div>

			<section class='home' id='home'>
				<div class='image'>
					<img src='./image/home-img.svg' alt='home-img.svg' />
				</div>
				<div class='content'>
					<h3>stay safe, stay healthy</h3>
					<p>
						Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
						Rem Sed Autem Vero? Magnam, Est Laboriosam!
					</p>
					<a href='#' class='btn'>
						contact us <span class='fas fa-chevron-right' />{" "}
					</a>
				</div>
			</section>

			<section class='icons-container'>
				<div class='icons'>
					<i class='fas fa-user-md' />
					<h3>140+</h3>
					<p>doctors at work</p>
				</div>
				<div class='icons'>
					<i class='fas fa-users' />
					<h3>1040+</h3>
					<p>satisfied patients</p>
				</div>
				<div class='icons'>
					<i class='fas fa-procedures' />
					<h3>500+</h3>
					<p>bed facility</p>
				</div>
				<div class='icons'>
					<i class='fas fa-hospital' />
					<h3>80+</h3>
					<p>available hospitals</p>
				</div>
			</section>

			<section class='services' id='services'>
				<h1 class='heading'>
					our <span>services</span>
				</h1>
				<div class='box-container'>
					<div class='box'>
						<i class='fas fa-notes-medical' />
						<h3>free checkups</h3>
						<p>
							Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
							Elit. Ad, Omnis.
						</p>
						<a href='#' class='btn'>
							learn more <span class='fas fa-chevron-right' />{" "}
						</a>
					</div>
					<div class='box'>
						<i class='fas fa-ambulance' />
						<h3>24/7 ambulance</h3>
						<p>
							Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
							Elit. Ad, Omnis.
						</p>
						<a href='#' class='btn'>
							learn more <span class='fas fa-chevron-right' />{" "}
						</a>
					</div>
					<div class='box'>
						<i class='fas fa-user-md' />
						<h3>expert doctors</h3>
						<p>
							Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
							Elit. Ad, Omnis.
						</p>
						<a href='#' class='btn'>
							learn more <span class='fas fa-chevron-right' />{" "}
						</a>
					</div>
					<div class='box'>
						<i class='fas fa-pills' />
						<h3>medicines</h3>
						<p>
							Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
							Elit. Ad, Omnis.
						</p>
						<a href='#' class='btn'>
							learn more <span class='fas fa-chevron-right' />{" "}
						</a>
					</div>
					<div class='box'>
						<i class='fas fa-procedures' />
						<h3>bed facility</h3>
						<p>
							Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
							Elit. Ad, Omnis.
						</p>
						<a href='#' class='btn'>
							learn more <span class='fas fa-chevron-right' />{" "}
						</a>
					</div>
					<div class='box'>
						<i class='fas fa-heartbeat' />
						<h3>total care</h3>
						<p>
							Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
							Elit. Ad, Omnis.
						</p>
						<a href='#' class='btn'>
							learn more <span class='fas fa-chevron-right' />{" "}
						</a>
					</div>
				</div>
			</section>

			<section class='about' id='about'>
				<h1 class='heading'>
					<span>about</span> us
				</h1>
				<div class='row'>
					<div class='image'>
						<img src='./image/about-img.svg' alt='' />
					</div>
					<div class='content'>
						<h3>we take care of your healthy life</h3>
						<p>
							Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
							Elit. Iure Ducimus, Quod Ex Cupiditate Ullam In
							Assumenda Maiores Et Culpa Odit Tempora Ipsam Qui,
							Quisquam Quis Facere Iste Fuga, Minus Nesciunt.
						</p>
						<p>
							Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing
							Elit. Natus Vero Ipsam Laborum Porro Voluptates
							Voluptatibus A Nihil Temporibus Deserunt Vel?
						</p>
						<a href='#' class='btn'>
							learn more <span class='fas fa-chevron-right' />{" "}
						</a>
					</div>
				</div>
			</section>

			<section class='doctors' id='doctors'>
				<h1 class='heading'>
					our <span>doctors</span>
				</h1>
				<div class='box-container'>
					<div class='box'>
						<img src='./image/doc-1.jpg' alt='' />
						<h3>Dr. john deo</h3>
						<span>expert doctor</span>
						<div class='share'>
							<a href='#' class='fab fa-facebook-f' />
							<a href='#' class='fab fa-twitter' />
							<a href='#' class='fab fa-linkedin' />
							<a href='#' class='fab fa-instagram' />
						</div>
					</div>
					<div class='box'>
						<img src='./image/doc-2.jpg' alt='' />
						<h3>Dr. Pullen</h3>
						<span>expert doctor</span>
						<div class='share'>
							<a href='#' class='fab fa-facebook-f' />
							<a href='#' class='fab fa-twitter' />
							<a href='#' class='fab fa-linkedin' />
							<a href='#' class='fab fa-instagram' />
						</div>
					</div>
					<div class='box'>
						<img src='./image/doc-3.jpg' alt='' />
						<h3> Dr. Swallow</h3>
						<span>expert doctor</span>
						<div class='share'>
							<a href='#' class='fab fa-facebook-f' />
							<a href='#' class='fab fa-twitter' />
							<a href='#' class='fab fa-linkedin' />
							<a href='#' class='fab fa-instagram' />
						</div>
					</div>
					<div class='box'>
						<img src='./image/doc-4.jpg' alt='' />
						<h3>Dr. Mangle</h3>
						<span>expert doctor</span>
						<div class='share'>
							<a href='#' class='fab fa-facebook-f' />
							<a href='#' class='fab fa-twitter' />
							<a href='#' class='fab fa-linkedin' />
							<a href='#' class='fab fa-instagram' />
						</div>
					</div>
					<div class='box'>
						<img src='./image/doc-5.jpg' alt='' />
						<h3>Dr. Fillmore</h3>
						<span>expert doctor</span>
						<div class='share'>
							<a href='#' class='fab fa-facebook-f' />
							<a href='#' class='fab fa-twitter' />
							<a href='#' class='fab fa-linkedin' />
							<a href='#' class='fab fa-instagram' />
						</div>
					</div>
					<div class='box'>
						<img src='./image/doc-6.jpg' alt='' />
						<h3>Dr. Watamaniuk</h3>
						<span>expert doctor</span>
						<div class='share'>
							<a href='#' class='fab fa-facebook-f' />
							<a href='#' class='fab fa-twitter' />
							<a href='#' class='fab fa-linkedin' />
							<a href='#' class='fab fa-instagram' />
						</div>
					</div>
				</div>
			</section>

			<section class='book' id='book'>
				<h1 class='heading'>
					<span>book</span> now
				</h1>
				<div class='row'>
					<div class='image'>
						<img src='./image/book-img.svg' alt='' />
					</div>
					<form action=''>
						<h3>book appointment</h3>
						<input
							type='text'
							placeholder='your name'
							class='box'
							id='name'
							onChange={(e) => {
								handleInfo(e);
							}}
						/>
						<input
							type='number'
							placeholder='your number'
							class='box'
							id='number'
							onChange={(e) => {
								handleInfo(e);
							}}
						/>
						<input
							type='email'
							placeholder='your email'
							class='box'
							id='email'
							onChange={(e) => {
								handleInfo(e);
							}}
						/>
						<select
							name='Specializtion'
							id='specialization'
							className='box'
							onChange={(e) => {
								handleInfo(e);
							}}>
							<option value=''>Specialization</option>
							<option value='Family'>Family</option>
							<option value='Internal'>Internal</option>
							<option value='Paediatrician'>Paediatrician</option>
							<option value='Cardiologist'>Cardiologist</option>
							<option value='Oncologist'>Oncologist</option>
							<option value='Gastroenterologist'>
								Gastroenterologist
							</option>
							<option value='Pulmonologist'>Pulmonologist</option>
							<option value='InfectiousDisease'>
								InfectiousDisease
							</option>
							<option value='Endocrinologist'>
								Endocrinologist
							</option>
							<option value='Ophthalmologist'>
								Ophthalmologist
							</option>
							<option value='Dermatologist'>Dermatologist</option>
							<option value='Psychiatrist'>Psychiatrist</option>
							<option value='Neurologist'>Neurologist</option>
							<option value='Radiologist'>Radiologist</option>
							<option value='Anesthesiologist'>
								Anesthesiologist
							</option>
							<option value='Surgeon'>Surgeon</option>
							<option value='PhysicianExecutive'>
								PhysicianExecutive
							</option>
						</select>
						<input
							type='submit'
							value='book now'
							class='btn'
							onClick={(e) => {
								sendInfo(e);
							}}
						/>
					</form>
				</div>
			</section>

			<section class='review' id='review'>
				<h1 class='heading'>
					client's <span>review</span>
				</h1>
				<div class='box-container'>
					<div class='box'>
						<img src='./image/pic-1.png' alt='' />
						<h3>Jazmin Archer</h3>
						<div class='stars'>
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star-half-alt' />
						</div>
						<p class='text'>
							Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing
							Elit. Laboriosam Sapiente Nihil Aperiam? Repellat
							Sequi Nisi Aliquid Perspiciatis Libero Nobis Rem
							Numquam Nesciunt Alias Sapiente Minus Voluptatem,
							Reiciendis Consequuntur Optio Dolorem!
						</p>
					</div>
					<div class='box'>
						<img src='./image/pic-2.png' alt='' />
						<h3>Jazmin Archer</h3>
						<div class='stars'>
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star-half-alt' />
						</div>
						<p class='text'>
							Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing
							Elit. Laboriosam Sapiente Nihil Aperiam? Repellat
							Sequi Nisi Aliquid Perspiciatis Libero Nobis Rem
							Numquam Nesciunt Alias Sapiente Minus Voluptatem,
							Reiciendis Consequuntur Optio Dolorem!
						</p>
					</div>
					<div class='box'>
						<img src='./image/pic-3.png' alt='' />
						<h3>Abdiel Galloway</h3>
						<div class='stars'>
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star' />
							<i class='fas fa-star-half-alt' />
						</div>
						<p class='text'>
							Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing
							Elit. Laboriosam Sapiente Nihil Aperiam? Repellat
							Sequi Nisi Aliquid Perspiciatis Libero Nobis Rem
							Numquam Nesciunt Alias Sapiente Minus Voluptatem,
							Reiciendis Consequuntur Optio Dolorem!
						</p>
					</div>
				</div>
			</section>

			<section class='blogs' id='blogs'>
				<h1 class='heading'>
					our <span>blogs</span>
				</h1>
				<div class='box-container'>
					<div class='box'>
						<div class='image'>
							<img src='./image/blog-1.jpg' alt='' />
						</div>
						<div class='content'>
							<div class='icon'>
								<a href='#'>
									<i class='fas fa-calendar' />1st may, 2021
								</a>
								<a href='#'>
									<i class='fas fa-user' /> by admin
								</a>
							</div>
							<h3>blog title goes here</h3>
							<p>
								Lorem Ipsum, Dolor Sit Amet Consectetur
								Adipisicing Elit. Provident, Eius
							</p>
							<a href='#' class='btn'>
								learn more <span class='fas fa-chevron-right' />{" "}
							</a>
						</div>
					</div>
					<div class='box'>
						<div class='image'>
							<img src='./image/blog-2.jpg' alt='' />
						</div>
						<div class='content'>
							<div class='icon'>
								<a href='#'>
									<i class='fas fa-calendar' /> 1st may, 2021
								</a>
								<a href='#'>
									<i class='fas fa-user' /> by admin
								</a>
							</div>
							<h3>blog title goes here</h3>
							<p>
								Lorem Ipsum, Dolor Sit Amet Consectetur
								Adipisicing Elit. Provident, Eius
							</p>
							<a href='#' class='btn'>
								learn more <span class='fas fa-chevron-right' />{" "}
							</a>
						</div>
					</div>
					<div class='box'>
						<div class='image'>
							<img src='./image/blog-3.jpg' alt='' />
						</div>
						<div class='content'>
							<div class='icon'>
								<a href='#'>
									<i class='fas fa-calendar' /> 1st may, 2021
								</a>
								<a href='#'>
									<i class='fas fa-user' /> by admin
								</a>
							</div>
							<h3>blog title goes here</h3>
							<p>
								Lorem Ipsum, Dolor Sit Amet Consectetur
								Adipisicing Elit. Provident, Eius
							</p>
							<a href='#' class='btn'>
								learn more <span class='fas fa-chevron-right' />{" "}
							</a>
						</div>
					</div>
				</div>
			</section>
			<section class='footer'>
				<div class='box-container'>
					<div class='box'>
						<h3>quick links</h3>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> home
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> services
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> about
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> doctors
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> book
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> review
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> blogs
						</a>
					</div>
					<div class='box'>
						<h3>our services</h3>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> dental care
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> message therapy
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> cardioloty
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> diagnosis
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-chevron-right' /> ambulance service
						</a>
					</div>
					<div class='box'>
						<h3>contact info</h3>
						<a href='#'>
							{" "}
							<i class='fas fa-phone' /> +123456789
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-envelope' /> medcare.info.com
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-envelope' />{" "}
							medcare.info.@gmail.com
						</a>
						<a href='#'>
							{" "}
							<i class='fas fa-map-marker-alt' /> Egypt,
							Alexandria
						</a>
					</div>
					<div class='box'>
						<h3>follow us</h3>

						<a href='#'>
							{" "}
							<i class='fab fa-facebook-f' /> facebook
						</a>
						<a href='#'>
							{" "}
							<i class='fab fa-twitter' /> twitter
						</a>
						<a href='#'>
							{" "}
							<i class='fab fa-linkedin' /> linkedin
						</a>
						<a href='#'>
							{" "}
							<i class='fab fa-instagram' /> instagram
						</a>
						<a href='#'>
							{" "}
							<i class='fab fa-youtube' /> youtube
						</a>
						<a href='#'>
							{" "}
							<i class='fab fa-pinterest' /> pinterest
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;