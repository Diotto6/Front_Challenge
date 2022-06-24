import React, {useState, useEffect} from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import load1 from '../../images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import  Animations  from '../../utilities/Animations'
import "./Comments.css"
import { getComment } from '../services/api';
import { createComment } from '../services/api';

export default function Comments(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
      const [comments, setComments] = useState([])
      const [name, setName] = useState("");
      const [comment, setComment] = useState("");
      const [bool] = useState("");


      const handleName = (e) => {
        setName(e.target.value);
      };
      const handleComment = (e) => {
        setComment(e.target.value);
      };
     
      console.log(name);
     

      const loadData = async () => {
          const response = await getComment(name, comment)

        setComments(response.data)
      }
      const handlenewComment = async () => {
          
        await createComment(name, comment)
        loadData()
      }

      useEffect(() => {
         loadData()
      })

  return (

    
    <div className='comment-container fade-in' 
    id={props.id || ''}>
        <ScreenHeading subHeading={'Deixei o seu comentario'}

        title={'Alguns comentarios'}
        /> <div className="main">   
                 <div className="container-comment">
                <ul>{ comments.map((e) => (

                
                    <li>
                    <div className="info" key={e.id}>
                        <div className="name">{e.name}</div>
                        <div className="comments">
                            "{e.comment}"</div>
                    </div>

                    </li>
                   ))
                } </ul>
                </div>
                    </div> 
        <div className='comment-form'>
                <form>
                    <label htmlFor='name'>Nome</label>
                    <input type='text'
                     onChange={handleName} 
                     value={name}
                    />

                    <label htmlFor='comment'>Comentario</label>
                    <input type='text'
                    onChange={handleComment} 
                    value={comment}
                    />

                    <div className='send-btn'>
                        <button type='submit' onClick={handlenewComment}>
                                Enviar<i className='fa fa-paper-plane'/>
                                {bool?(<b className='load'>
                                        <image src={load1} alt='image not responding'/>
                                </b>):("")}
                        </button>
                    </div>
                </form>
                </div>
                </div>
          
  )
}
