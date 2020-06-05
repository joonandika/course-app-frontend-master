import React ,{useState,useEffect}from 'react';
import { ListingFetch,selectListFetch } from '../firebaseHelpers/listing.js';
import Skeleton from 'react-loading-skeleton';
import '../styles/listingCard.css'
import Modal from './detailsModel.js';

const ListingCard = (props)=>{
    const [info,setInfo] = useState([]);
    const [loading,setLoad] = useState(true);
    const [modal,setModal] = useState(false);
    const [modalDetails,setDetails ]= useState({
        title:"",
        description:"",
        email:"",
        image:"",
        address:"",
        url:"",
        courses:"",
        phone:""

    });


    useEffect(()=>{
        if(props.name !="All"){
            selectListFetch(props.name)
            .then(data=>{
                setInfo(data);
                console.log(data);
                setLoad(false);
            })
            .catch(err=>console.log(err));
        }
        else {
            ListingFetch("All")
            .then(data=>{
                setInfo(data);
                setLoad(false);
            })
            .catch(err=>console.log(err));
        }
    },[]);
    const {title,description,email,image,address,url,courses,phone} = modalDetails;

    const displayDesc = (s)=>{
       var sarr = s.split(" ");
       if(sarr.length >25){
           s = s.substring(0,55);
            s+="....";
           return s;
       }else return s;
    }
    
    return (
        <>
           {
               modal && (
                <Modal
                title = {title}
                details={description}
                image= {image}
                address={address}
                url = {url}
                courses={courses}
                phone={phone}
                className="modal"
                email={email}
                show={modal}
                close={()=>setModal(false)}>
                    Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal>
               )
           }
        
       
            {  info && (
                info.map((val,ind)=>{
                return (
                    
                    <div className="column py-md-3">   
                    
                        <div className="card text-center" id="listingCard" style={{width:"18rem",minWidth:"18rem",heigth:"24rem"}}>
                            <div className="imgcover" style={{width:"100%",objectFit:"cover",height:"13vw",justifyContent:"center"}}>
                            <img src={val.imgUrl} className="card-img-top   embed-responsive-item" style={{maxHeight:"13vw",minHeight:"11vw"}} />
                            </div>
                       
                        <div className="card-body" style={{padding:"2px 16px"}}>
                          <h5 className="cardtitle">{val.title}</h5>
                          <p className="card-text">
                              {displayDesc(val.description)}
                          </p>
                         
                        </div>
                        <button className="btn btn-primary" style={{borderColor:"white"}} onClick={()=>{
                            setModal(true);
                            setDetails({title:val.title,
                                description:val.description,
                                email:val.email,
                                image:val.imgUrl,
                                address:val.Address,
                                url:val.url,
                                courses:val.courses.join(", "),
                                phone:val.phone
                            });
                            }}>More Details</button>
                        <a href={val.url} target="_blank" className="btn btn-primary" style={{borderColor:"white"}}>Visit website</a>
                    </div>
                    </div>
                   
                )
                })
                )
            }
            
    
        </>
    )
};
export default ListingCard;
