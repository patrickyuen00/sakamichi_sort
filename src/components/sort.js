import Button from '@mui/material/Button';
import { useState, useEffect, useRef} from 'react';
import Result from './result';
import './sort.css';

export default function Sort(group) {
    const members_all = require('./members.json');
    const [member,setMember] = useState({});
    const [member_list,setList] = useState([]);
    const [index_a,setA] = useState(0);
    const [index_b,setB] = useState(1);
    const [endSort,setEnd] = useState(null);
    const [previous,setPrev] = useState(null)
    const initialRender = useRef(true);
    const firstPrev = useRef(false);

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
            setEnd(<div className='result'>
                <h1>結果</h1>
                <Result array={member_list} obj={member} />
                </div>)
        }
    },[index_a])

    function nextMember(index){
        firstPrev.current = false
        if (index === 'a') {
            setPrev('a')
            member[member_list[index_a]] += 1
        }
        else if (index === 'b') {
            setPrev('b')
            member[member_list[index_b]] += 1
        }

        if (index_b !== member_list.length - 1) {
            setB(index_b + 1)
        }
        else {
            setA(index_a + 1)
            setB(index_a + 2)
        }
    }

    function prev(){
        if (firstPrev.current) {
            window.alert('戻る操作は一回までしかできません')
            return
        }
        firstPrev.current = true
        if (index_b - index_a === 1){
            setA(index_a - 1)
            setB(member_list.length - 1)
                if (previous === 'a') {
                    member[member_list[index_a - 1]] -= 1
                }
                else {
                    member[member_list[member_list.length - 1]] -= 1
                }
        }
        else {
            setB(index_b - 1)
            if (previous === 'a') {
                member[member_list[index_a]] -= 1
            }
            else {
                member[member_list[index_b - 1]] -= 1
            }
        }
    }

    return (
        <div className='sort'>
            <h1>{members_all[group.group]['group']}ソート</h1>
            <div>
                <Button variant='contained' onClick={() => nextMember('a')} 
                style={{fontSize: "20px"}} className='main_button'>{member_list[index_a]}</Button>
                <Button variant='contained' onClick={() => nextMember('b')} 
                style={{fontSize: "20px"}} className='main_button'>{member_list[index_b]}</Button>
            </div>
            <div className='modoru'>
                <Button variant='outlined' onClick={prev}>戻る</Button>
            </div>
            {endSort}
        </div>
    )
}