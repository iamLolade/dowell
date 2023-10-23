import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="main">
                <Header />
                <div style={{ padding: '2em 4em' }}>
                    <h3>Recent Transactions</h3>
                    <div className="boxes">
                    <div className="box"></div>
                    <div className="box"></div>
                        <div className="box"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;