import React from 'react'
import { Route, Routes, Link } from "react-router-dom"
import '../css/Header.css'

export default function Header() {
  return (
    
   
  <nav id="nav-2">
    <form class="search" action="search.php"> 
      <input name="q" placeholder="Search..." type="search"/>
        
    </form>
  <a class="link-2" href="/">Home</a>
  <a class="link-2" href="/about">About</a>
  <a class="link-2" href="/contact">Contact</a>
  
</nav>

  )
}
