import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import {useState} from "react";
import ActivePanel from "../../components/ActivePanel/ActivePanel";

const Dashboard = () => {
    const [activePanel, setActivePanel] = useState('file')

    return (
        <div>
            <DashboardSidebar setActivePanel={setActivePanel} />
            <ActivePanel activePanelType={activePanel} />
        </div>
    )
}

export default Dashboard;