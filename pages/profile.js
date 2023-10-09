// pages/about.js

import Link from "next/link";
import NavBarLogin from "../components/NavbarLogin";
import OffCanvas from "../components/OffCanvas";
import Footer from "../components/Footer";
function Dashboard() {
    return (
        <div className="wrapper" id="wrapper">
            <NavBarLogin />
            <div className="profile">
                <div className="container-fluid">
                    <div className="profile-header">
                        <a href="" className="share">
                            Share
                            <img src="/assets/images/icon-share-white.svg" alt="" />
                        </a>
                        <div className="img-container">
                            <img src="/assets/images/dashboard-user-main.png" alt="" />
                        </div>
                        <div className="text-container">
                            <h3>Devon Lane</h3>
                            <ul>
                                <li>
                                    <a href="">
                                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.54752 19.7512C16.6042 19.7512 21.5578 12.2479 21.5578 5.74101C21.5578 5.52789 21.5578 5.31573 21.5434 5.10453C22.507 4.40748 23.3389 3.54441 24 2.55573C23.1014 2.95413 22.148 3.21528 21.1718 3.33045C22.1998 2.71514 22.9692 1.74723 23.3366 0.606928C22.3701 1.18054 21.3126 1.58475 20.2099 1.80213C19.4675 1.01271 18.4856 0.48997 17.4162 0.314813C16.3468 0.139656 15.2494 0.321843 14.294 0.833181C13.3385 1.34452 12.5782 2.1565 12.1307 3.14348C11.6833 4.13045 11.5735 5.23739 11.8186 6.29301C9.86089 6.19481 7.94576 5.68604 6.19745 4.79973C4.44915 3.91343 2.90676 2.66939 1.6704 1.14837C1.04073 2.23236 0.847872 3.5156 1.1311 4.73679C1.41433 5.95799 2.15234 7.02532 3.19488 7.72149C2.41123 7.69853 1.64465 7.48712 0.96 7.10517V7.16757C0.960311 8.30442 1.35385 9.40616 2.07387 10.2859C2.79389 11.1657 3.79606 11.7693 4.9104 11.9944C4.18548 12.1922 3.42487 12.2211 2.68704 12.0789C3.00181 13.0573 3.61443 13.9128 4.43924 14.5259C5.26405 15.139 6.25983 15.479 7.28736 15.4985C6.26644 16.3009 5.09731 16.8942 3.84687 17.2444C2.59643 17.5947 1.28921 17.6949 0 17.5394C2.25183 18.9844 4.87192 19.7509 7.54752 19.7474" fill="#FBFFFF"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55781 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="#FBFFFF"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#FBFFFF"/>
                                            <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#FBFFFF"/>
                                            <path d="M19.8469 5.59141C19.8469 6.38829 19.2 7.03047 18.4078 7.03047C17.6109 7.03047 16.9688 6.3836 16.9688 5.59141C16.9688 4.79453 17.6156 4.15234 18.4078 4.15234C19.2 4.15234 19.8469 4.79922 19.8469 5.59141Z" fill="#FBFFFF"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.5221 3.18492C23.3864 2.67434 23.119 2.20834 22.7466 1.83358C22.3743 1.45881 21.91 1.18842 21.4003 1.04947C19.5239 0.544922 12.0239 0.544922 12.0239 0.544922C12.0239 0.544922 4.52393 0.544922 2.64756 1.04947C2.13786 1.18842 1.67358 1.45881 1.30121 1.83358C0.928842 2.20834 0.661431 2.67434 0.525744 3.18492C0.0239258 5.06947 0.0239258 8.99947 0.0239258 8.99947C0.0239258 8.99947 0.0239258 12.9295 0.525744 14.814C0.661431 15.3246 0.928842 15.7906 1.30121 16.1654C1.67358 16.5401 2.13786 16.8105 2.64756 16.9495C4.52393 17.454 12.0239 17.454 12.0239 17.454C12.0239 17.454 19.5239 17.454 21.4003 16.9495C21.91 16.8105 22.3743 16.5401 22.7466 16.1654C23.119 15.7906 23.3864 15.3246 23.5221 14.814C24.0239 12.9295 24.0239 8.99947 24.0239 8.99947C24.0239 8.99947 24.0239 5.06947 23.5221 3.18492Z" fill="#FBFFFF"/>
                                            <path d="M9.56934 12.5689V5.43164L15.8421 9.00028L9.56934 12.5689Z" fill="#003467"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="inner-tabs">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="about-tab" data-bs-toggle="tab"
                                        data-bs-target="#about" type="button" role="tab" aria-controls="home"
                                        aria-selected="true">About me
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="experience-tab" data-bs-toggle="tab"
                                        data-bs-target="#experience" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">Experience
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="progress-tab" data-bs-toggle="tab"
                                        data-bs-target="#progress" type="button" role="tab" aria-controls="contact"
                                        aria-selected="false">Progress
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="presentation-tab" data-bs-toggle="tab"
                                        data-bs-target="#presentation" type="button" role="tab" aria-controls="contact"
                                        aria-selected="false">Education
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="about"
                                role="tabpanel"
                                aria-labelledby="about-tab"
                            >
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="card">
                                            <div className="about-text-container">
                                                <p>
                                                    Devon is a skilled software engineer who develops
                                                    cutting-edge technologies that simplify and enhance
                                                    people&apos;s lives. His innovative solutions revolutionize
                                                    industries, making everyday tasks more efficient and
                                                    enjoyable.
                                                </p>
                                                <a href="" className="btn btn-brand btn-56">
                                                    Edit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="badges">
                                            <div className="block">
                                                <div className="badge">
                                                    <img
                                                        src="/assets/images/badge-fire.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="block">
                                                <div className="badge">
                                                    <img
                                                        src="/assets/images/badge-rocket.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="block">
                                                <div className="badge">
                                                    <img
                                                        src="/assets/images/badge-sparkles.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="block">
                                                <div className="badge">
                                                    <img
                                                        src="/assets/images/badge-trophy.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="block">
                                                <div className="badge">
                                                    <img
                                                        src="/assets/images/badge-award.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="block">
                                                <div className="badge">
                                                    <img
                                                        src="/assets/images/badge-atom.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="experience" role="tabpanel"
                                 aria-labelledby="experience-tab">bbb
                            </div>
                            <div className="tab-pane fade" id="progress" role="tabpanel"
                                 aria-labelledby="progress-tab">ccc
                            </div>
                            <div className="tab-pane fade" id="presentation" role="tabpanel"
                                 aria-labelledby="experience-tab">ddd
                            </div>
                            {/* Add content for other tabs here */}
                        </div>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        About edit
                    </button>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#educationModal">
                        Education edit
                    </button>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#experienceModal">
                        Experience edit
                    </button>





                    <div className="modal fade custom-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="my-header d-flex justify-content-between align-items-center">
                                        <div className="my-header-left">
                                            <h4>Edit About</h4>
                                            <p className="mb-2">Tell others about yourself</p>
                                        </div>
                                        <div className="my-header-right">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                                        fill="#003467"/>
                                                    <path d="M15.5 15.5L8.5 8.5" stroke="#FFFDF9" stroke-width="1.5"
                                                          stroke-linejoin="round"/>
                                                    <path d="M15.5 8.5L8.5 15.5" stroke="#FFFDF9" stroke-width="1.5"
                                                          stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <textarea className="form-control" id="" rows="3"></textarea>
                                    <div>
                                        <button className="btn btn-brand btn-48 float-end mt-2">Save Changes</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="modal fade custom-modal education-modal" id="educationModal" tabIndex="-1" aria-labelledby="educationModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="my-header d-flex justify-content-between align-items-center">
                                        <div className="my-header-left">
                                            <h4>Education</h4>
                                        </div>
                                        <div className="my-header-right">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                                        fill="#003467"/>
                                                    <path d="M15.5 15.5L8.5 8.5" stroke="#FFFDF9" stroke-width="1.5"
                                                          stroke-linejoin="round"/>
                                                    <path d="M15.5 8.5L8.5 15.5" stroke="#FFFDF9" stroke-width="1.5"
                                                          stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="edu-block mb-5">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Degree</label>
                                            <input type="email" className="form-control" id="" placeholder=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Institution</label>
                                            <input type="email" className="form-control" id="" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="edu-block mb-5">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Degree</label>
                                            <input type="email" className="form-control" id="" placeholder=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Institution</label>
                                            <input type="email" className="form-control" id="" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex justify-content-between align-items-center">
                                        <div className="form-check float-end my-2">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Dont show on my profile
                                                </label>
                                        </div>

                                        <div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z"
                                                    fill="#003467"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-brand btn-48 float-end">Save changes</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal fade custom-modal" id="experienceModal" tabIndex="-1" aria-labelledby="experienceModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="my-header d-flex justify-content-between align-items-center">
                                        <div className="my-header-left">
                                            <h4>Experience</h4>
                                        </div>
                                        <div className="my-header-right">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                                                        fill="#003467"/>
                                                    <path d="M15.5 15.5L8.5 8.5" stroke="#FFFDF9" stroke-width="1.5"
                                                          stroke-linejoin="round"/>
                                                    <path d="M15.5 8.5L8.5 15.5" stroke="#FFFDF9" stroke-width="1.5"
                                                          stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="edu-block mb-5">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Title</label>
                                            <input type="email" className="form-control" id="" placeholder=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Company Name</label>
                                            <input type="email" className="form-control" id="" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="edu-block mb-5">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Title</label>
                                            <input type="email" className="form-control" id="" placeholder=""/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Company Name</label>
                                            <input type="email" className="form-control" id="" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex justify-content-between align-items-center">
                                        <div className="form-check float-end my-2">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Dont show on my profile
                                                </label>
                                        </div>

                                        <div>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z"
                                                    fill="#003467"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-brand btn-48 float-end">Save changes</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;
