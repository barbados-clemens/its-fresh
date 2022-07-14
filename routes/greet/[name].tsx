/** @jsx h */
import { h } from 'preact';
import {PageProps} from '$fresh/server.ts';
import Countdown from '../../islands/Countdown.tsx'

export default function GreetPage(props: PageProps) {
    const {name} = props.params;
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <main>
            <p>Greetings to you, {name}</p>
            <Countdown target={date.toISOString()}/>
        </main>
    )
}