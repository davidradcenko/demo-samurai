
import React from 'react';
import { userType } from '../../Types/Types';

import Paginatir from '../common/paginator/Paginatir';
import User from './User';
type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pages: number) => void
    users: Array<userType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({ currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props }) => {
    return < div >
        <Paginatir totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow} />)}
        </div>
    </div >
}
export default Users;