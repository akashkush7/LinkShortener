'use client'
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Page = () => {
  const [data, setData] = useState({
    link: '',
    newlink: '',
    alias: '',
  })

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    })
  }

  const FetchAPI = async () => {
    const newdata = new URLSearchParams({
      url: data['link'],
      alias: data['alias'],
      // password: 'NodeIsCool@Example2',
      // 'max-clicks': '200'
    });
    try {
      const response = await fetch('https://spoo.me/', {
        method: 'post',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: newdata.toString()
      });
      const result = await response.json();
      if (response.ok) {
        setData({
          ...data,
          newlink: result.short_url,
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className='d-flex justify-content-center mb-5'>
        <div className='col-10'>
          <div className='p-3'>
            <h1 className='grey-qo-regular text-center' style={{ color: "lightpink", fontSize: "10dvw" }}>Link Shortener</h1>
            <p className='text-center'>"Link Shortener Magic: Short, Sweet, and Shareable!"</p>
          </div>
          <div>
            <div className='d-flex justify-content-center'>
              <div className='content-div text-center col-sm-10 col-md-6'>
                <div className='p-4'>
                  <h4 style={{ color: 'white', fontFamily: 'cursive' }}>Paste Your URL below.</h4>
                  <div className='d-flex justify-content-center flex-column mt-4'>
                    <input type="text" name="link" className="oglink" value={data['link']} placeholder='Paste Your Link' onChange={HandleChange} required />
                    <div className='mt-3'>
                      <input type="text" name="alias" className="oglink" value={data['alias']} placeholder='Enter Alias for URL' onChange={HandleChange} />
                    </div>
                    <div className='text-center pt-3'>
                      <button type="button" className='btn btn-dark' onClick={FetchAPI}> Shorten Your Link</button>
                    </div>
                    <div>
                      <input type="text" name="newlink" className="oglink mt-3" value={data['newlink']} readOnly />
                      <button className='btn btn-dark' onClick={() => {
                        navigator.clipboard.writeText(data['newlink']);
                        alert('link copied successfully')
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg>
                      </button>
                    </div>
                    <p className='mt-3' style={{ color: 'white' }}>LinkShortener is a free tool to shorten URLs and generate short links,
                      URL shortener allows to create a shortened link making it easy to share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page;