import style from './DashboardSidebar.module.scss'

const DashboardSidebar = ({ setActivePanel }) => {
    return (
        <div className={style.root}>
            <h3 onClick={() => setActivePanel('file')}>add new file</h3>
            <h3 onClick={() => setActivePanel('admin')}>add new admin</h3>
        </div>
    )
}

export default DashboardSidebar;