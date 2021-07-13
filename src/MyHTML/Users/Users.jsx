
import React from 'react';

import Paginatir from '../common/paginator/Paginatir';
import User from './User';


let Users = ({ currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props }) => {
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