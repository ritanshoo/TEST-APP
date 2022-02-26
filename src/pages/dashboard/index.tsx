import { AppBar } from '@mui/material';
import Notification from './../../media/icons/notification.svg'
import Settings from './../../media/icons/settings.svg'
import BackArrow from './../../media/icons/left-arrow.svg'
import HomeIcon from './../../media/icons/home.svg'
import Circle1 from './../../media/icons/circle1.svg'
import Circle2 from './../../media/icons/circle2.svg'
import Banner from './../../media/images/banner-nft.png'
import AvtarMedia from './../../media/icons/avtar.svg'
import TagIcon from './../../media/icons/tag.svg'
import Tabs from '../../components/dashboard/Tabs';
import Tab from '../../components/dashboard/Tab';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import React from 'react';
import CloseIcon from './../../media/icons/close.svg'

const customStyles = {
     content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       transform: 'translate(-50%, -50%)',
     },
};

const Dashboard = () => {
     const [modalIsOpen, setIsOpen] = React.useState(false);
     const [RejectmodalIsOpen, setRejectIsOpen] = React.useState(false);
     const [OffermodalIsOpen, setOfferIsOpen] = React.useState(false);
     function openModal() { setIsOpen(true) } 
     function openOfferModal(){ setOfferIsOpen(true) }
     function openRejectModal(){ setRejectIsOpen(true) }
     function closeOfferModal(){ setOfferIsOpen(false) }
     function closeRejectModal(){ setRejectIsOpen(false) }
     function closeModal() { setIsOpen(false) }

     return (
          <div className="page-wrapper">
               <AppBar position="static" className="page-header">
                    <div className="header-left">
                         <img src={BackArrow} alt="Notification" className="mr-3" />
                         <img src={HomeIcon} alt="Setting"/>
                    </div>
                    <div className="searchform">
                         <select className="form-control">
                              <option value=""> Johndoe.near </option>
                         </select>
                    </div>
                    <div className="header-right">
                         <img src={Notification} alt="Notification" className="mr-2" />
                         <img src={Settings} alt="Setting"/>
                    </div>
               </AppBar>
               <main className="main-content">
                    <div className="middle-content text-center">
                         <div className="page-banner">
                              <img src={Banner} alt="banner" />
                         </div>
                         <div className="profile-content">
                              <h3>Digital Ninja</h3>
                              <h2 className="profileID">#72873</h2>
                              <div className="avtar-media">
                                   <img src={AvtarMedia} alt="Avtar" />
                                   <h4>Johndoe.near</h4>
                              </div>
                         </div>
                         <div className="dashboard-tabs">
                              <Tabs>
                                   <Tab title="Info">
                                        <div className="tabs-content-section">
                                             <h4>Overview</h4>
                                             <p>digital ninjas are a collection of 1000 unique collectibles on the NEAR blockchain that serve to honor and preserve art.</p>
                                        </div>
                                   </Tab>
                                   <Tab title="Pending Offers">
                                        <ul className="tabs-content-section">
                                             <p className="w-100">2 active offer</p>
                                             <li>
                                                  <img src={Circle1} alt="circle" />
                                                  <div className="content-trade">
                                                       <p><Link to="/">CryptoKing.near </Link> made an offer of 0.345 NEAR</p>
                                                       <p>5 days ago</p>
                                                       <div className="groupsButton">
                                                            <button type="button" onClick={openModal}>Accept </button>
                                                            <button type="button" onClick={openOfferModal}>Counter offer </button>
                                                            <button type="button" onClick={openRejectModal}>Reject </button>
                                                       </div>
                                                  </div>
                                             </li>  
                                             <li>
                                                  <img src={Circle1} alt="circle" />
                                                  <div className="content-trade">
                                                       <p><Link to="/">CryptoKing.near </Link> made an offer of 0.345 NEAR</p>
                                                       <p>5 days ago</p>
                                                       <div className="groupsButton">
                                                            <button type="button" onClick={openModal}>Accept </button>
                                                            <button type="button">Counter offer </button>
                                                            <button type="button">Reject </button>
                                                       </div>
                                                  </div>
                                             </li>  
                                        </ul>
                                   </Tab>
                                   <Tab title="Trade History">
                                        <ul className="tabs-content-section">
                                             <li>
                                                  <img src={Circle1} alt="circle" />
                                                  <div className="content-trade">
                                                       <p>johdoe.near bought #72873 from </p>
                                                       <p><Link to="/">ninajking.near</Link> </p>
                                                       <p>3 months ago</p>
                                                  </div>
                                             </li> 
                                             <li>
                                                  <img src={Circle2} alt="circle" />
                                                  <div className="content-trade">
                                                       <p><Link to="/">ninajking.near</Link> minted #72873</p>
                                                       <p>3 months ago</p>
                                                  </div>
                                             </li>  
                                        </ul>
                                   </Tab>
                              </Tabs>
                         </div> 
                    </div>
               </main>
               <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <button type="button" onClick={closeModal} className="close-bttn">
                         <img src={CloseIcon} alt="close"/>
                    </button>
                    <div className="modal-content">
                         <div className="profile-content">
                              <h3>Accept Offer</h3>
                              <h2 className="profileID">#72873 </h2>
                              <div className="avtar-media">
                                   <h4>From</h4>
                                   <img src={Circle1} alt="Avtar" />
                                   <Link to="/">Johndoe.near</Link>
                              </div> 
                              <div className="avtar-media mt-0">
                                   <h4>Amount</h4>
                                   <p className="amount">0.3647 NEAR</p>
                              </div>
                              <button type="button" className="confirm-bttn">Confirm & Accept Offer</button>
                              <p className="termsContent">
                              by clicking confirm you must agree to homepage  
                              <Link to="/"> Terms & condition</Link>
                              </p>
                         </div>
                    </div>
               </Modal>
               <Modal
                    isOpen={RejectmodalIsOpen}
                    onRequestClose={closeRejectModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <button type="button" onClick={closeRejectModal} className="close-bttn">
                         <img src={CloseIcon} alt="close"/>
                    </button>
                    <div className="modal-content">
                         <div className="profile-content">
                              <h3>Reject Offer</h3>
                              <h2 className="profileID">#72873 </h2>
                              <div className="reject-form">
                                   <form action="">
                                        <div className="field-group">
                                             <label htmlFor="">Reason</label>
                                             <select className='form-control'>
                                                  <option value="Not For Sale">Not For Sale</option>
                                                  <option value="Not For Sale">For Sale</option>
                                             </select>
                                             <button type="button" className="reject-bttn">Reject Offer</button>
                                        </div>
                                   </form>
                              </div>
                              <p className="termsContent">
                              by clicking confirm you must agree to homepage  
                              <Link to="/"> Terms & condition</Link>
                              </p>
                         </div>
                    </div>
               </Modal>
               <Modal
                    isOpen={OffermodalIsOpen}
                    onRequestClose={closeOfferModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <button type="button" onClick={closeOfferModal} className="close-bttn">
                         <img src={CloseIcon} alt="close"/>
                    </button>
                    <div className="modal-content">
                         <div className="profile-content">
                              <h3>Make Counter Offer</h3>
                              <h2 className="profileID">#72873 </h2>
                              <div className="avtar-media">
                                   <h4>To</h4>
                                   <img src={Circle1} alt="Avtar" />
                                   <Link to="/">CryptoKing.near</Link>
                              </div> 
                              <div className="reject-form">
                                   <form action="">
                                        <div className="field-group">
                                             <label htmlFor="">Amount</label>
                                             <div className="input-combo-field">
                                                  <input type="text" className='form-control' placeholder="0.0000" />
                                                  <span>NEAR</span>
                                             </div>
                                             <div className="make-offer-bttn">
                                                  <button type="button" className="confirm-bttn">
                                                       <img src={TagIcon} alt="Tag Icon" />
                                                       Make Offer
                                                  </button>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </Modal>
          </div>
     )
}

export default Dashboard
