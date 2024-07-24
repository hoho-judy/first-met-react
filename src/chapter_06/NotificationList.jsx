import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
    { 
       id: 1,
       message: "오늘 일정을 알려드립니다.",
    },
    {
       id: 2,
       message: "약 드실 시간입니다.",
    },
    {
       id: 3,
       message: "운동갈 시간입니다.",
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // 앞으로 사용할 데이터를 state에 넣어서 초기화한다.
        this.state = {
            notifications: [],
        }
    }
    
    // 컴포넌트 마운팅 함수
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);

                // state 값을 수정하기 위해서 setState 사용
                this.setState({
                    notifications : notifications,
                });
            } else {
                // 출력이 다 되면 배열 비우고 clearInterval
                this.setState({
                    notifications: [],
                })
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {
                    this.state.notifications.map((notification) => {
                        return <Notification 
                                id={notification.id}
                                key={notification.id}
                                message={notification.message}/>;
                    })

                }
            </div>
        );
    }
}

export default NotificationList;