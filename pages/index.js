import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import {useEffect} from 'react';
import {PrivateRoute} from '../widgets/privateroute.js';
import {Dashboard} from './dashboard.js';
import FirebaseAuthProvider from '../firebase/firebaseauthprovider.js';
import { FirebaseDBProvider } from '../firebase/firebasedbprovider.js';
import Thing from './thing'


export default function Home() {
  // let router = useRouter()
  // useEffect(() => {
  //   Router.push('/thing')
  // })
  
  return (
    <div>
      <style jsx>{
        `
        p, h1, h2, h3, h4, h5, h6{
            font-family: sans-serif;
        }
        `
      }</style>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This is a really simple template... You can put anything here.</p>
        <FirebaseAuthProvider>
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute> 
        </FirebaseAuthProvider>
      </main>

    </div>
  )
}
