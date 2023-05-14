export default function Agregarimg (props) {
   return (

    
         <div className="m-3 p-3 shrink-0 snap-center">
           <img className="rounded-md hover:scale-125 hover:duration-300 hover:delay-300" 
           src={props.src} height={props.height}
               width={props.width} alt="error de imagen"></img> 
         </div>
    

   )
}