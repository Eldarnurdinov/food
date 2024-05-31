



const BlogCard = (props) => {
    const { bgImg } = props
    return (
        <div style={{
            background: "#fff",
            width: "306px",
            height: "340px",
            border: '1px solid #fff',
            marginBottom: "32px",
            borderRadius: "12px 12px 0 0",

        }}>
            <div style={{
                background: `url(${bgImg})`,
                height: "200px",
                marginBottom: "30px",
                borderRadius: "12px 12px 0 0",
            }}></div>
            <div>
                <p style={{
                    color: "#737865",
                    padding: "0 25px 12px ",
                    fontWeight: 500,
                }}>January 3, 2023</p>
                <h4 style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    padding: "0 25px 26px ",
                    color: "#2C2F24",

                }}>How to prepare a delicious gluten free sushi</h4>
            </div>
        </div>
    )
}

export default BlogCard