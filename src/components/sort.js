import Button from '@mui/material/Button';
import { useState, useEffect, useRef} from 'react';
import { Navigate } from 'react-router-dom';

export default function Sort(group) {
    const members_all = require('./members.json')
    const [member,setMember] = useState({})
    const [member_list,setList] = useState([])
    const [index_a,setA] = useState(0);
    const [index_b,setB] = useState(1);
    const [endSort,setEnd] = useState(null);
    const initialRender = useRef(true);

    useEffect(() => {
        initialRender.current = false;
        let member_temp = {}
        let temp_list = []
        for (let i = 0; i < members_all[group.group]['member'].length;i++){
            member_temp[members_all[group.group]['member'][i]] = 0
            temp_list.push(members_all[group.group]['member'][i])
        }

        setMember(member_temp)
        setList(temp_list)
    },[])

    useEffect(() => {
        if (initialRender.current === false && index_a === member_list.length - 1) {
            setEnd(<Navigate to='/' />)
        }
    },[index_a])

    function nextMember(){
        if (index_b !== member_list.length - 1) {
            setB(index_b + 1)
        }
        else {
            setA(index_a + 1)
            setB(index_a + 2)
        }
    }

    return (
        <div className='sort'>
            <h1>{members_all[group.group]['group']}ソート</h1>
            <Button variant='contained' onClick={nextMember}>{member_list[index_a]}</Button>
            <Button variant='contained' onClick={nextMember}>{member_list[index_b]}</Button>
            {endSort}
        </div>
    )
}