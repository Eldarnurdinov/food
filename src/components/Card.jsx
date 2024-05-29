


const Card = (props) => {
    const {foodName, bgImg, price} = props
  return (
    <div style={{
        width:306,
         border: '1.5px solid #DBDFD0'

         }}>
        <div style={{
          background: `url(${bgImg})`, 
          height: "250px", 
          marginBottom: "30px",
          }} ></div>
        <div>
            <h4 style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#AD343E",
              marginBottom: "15px",
            }}><b>$ {price}</b></h4>
            <h4 style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#2C2F24",
              marginBottom: "15px",

            }}><b>{foodName}</b></h4>
            <p style={{
               fontSize: "16px",
               fontWeight: 400,
               color: "#414536",
               marginBottom: "15px",

            }}>Made with eggs, lettuce, salt, oil and other ingredients.</p>
        </div>
    </div>
  )
}

export default Card