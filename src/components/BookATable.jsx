



const BookATable = () => {
    return (
        <div className="book-a-table">
            <div className="book-content">
                <h1 className="title">Book A Table</h1>
                <h2 className="h2-title">We consider all the drivers of change gives you the components you need to change to create a truly happens.</h2>
                <div className="book-form">
                    <div className="date-time flex">
                        <div>
                            <h5>Date</h5>
                            <input type="date" />
                        </div>
                        <div>
                            <h5>Time</h5>
                            <select>
                                {["06.30 PM", "12.30 PM", "16.30 PM"].map(time => (
                                    <option value={time} key={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="name-phone flex">
                        <div>
                            <h5>Name</h5>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <input type="text" placeholder="x-xxx-xxx-xxxx" />
                        </div>
                    </div>
                    <div className="total-person">
                        <h5>Total Person</h5>
                        <select>
                            {[1, 2, 3].map(person => <option key={person} value={person}>{person}</option>)}
                        </select>
                    </div>
                    <div className="book-btn">
                        <button className="btn brown-btn">Book A Table</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookATable