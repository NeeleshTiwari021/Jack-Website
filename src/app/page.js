"use client"
import About from "./components/homepage/about/about"
import Book from "./components/homepage/bookappointment/book"
import Buysell from "./components/homepage/buysell/buysell"
import Herosection from "./components/homepage/herosection/herosection"
import Neighbourhoods from "./components/homepage/neighbourhoods/neighbourhoods"
import News from "./components/homepage/news/news"
import Property from "./components/homepage/property/property"
import Sale from "./components/homepage/sale/sale"
import Testimonials from "./components/homepage/testimonials/testimonials"


export default function Home() {

  return (
    <>
    <Herosection/>
    <About/>
    <Buysell/>
    <Testimonials/>
    <Sale/>
    <Property/>
    <Neighbourhoods/>
    <News/>
    </>
  )
}