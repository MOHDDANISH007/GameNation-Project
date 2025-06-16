'use client'
import React, { useState, use, useEffect } from 'react'
import { useData } from '../../context/DataContext'
import {motion} from 'framer-motion'
import Link from 'next/link'

const XboxOne = () => {
  const { dataFromBackendForXbox_One, loading, setLoading } = useData()
  const [games, setGames] = useState([])
  console.log('Games ', games)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dataFromBackendForXbox_One()
        if (Array.isArray(res.xboxOnes)) {
          setGames(res.xboxOnes)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center text-white'>
        <div className='text-2xl'>Loading consoles...</div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <div className='text-white px-4 py-6'>
        <h1 className='text-3xl underline p-2 font-bold mb-4'>
          Xbox One Games
        </h1>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {games.map((game, index) => (
            <Link key={game.game_id} href={`/games/xboxOne/${game.game_id}`}>
              <li className='bg-gray-800 p-4 rounded shadow cursor-pointer hover:bg-gray-700 transition'>
                <img
                  src={game.image_link || '/fallback.jpg'}
                  alt={game.game_name || 'Game Image'}
                  width={300}
                  height={200}
                  className='w-full h-48 object-cover rounded mb-3'
                />
                <h2 className='text-lg font-semibold mb-2 line-clamp-2'>{game.game_name}</h2>
                <p className='text-yellow-400 font-bold text-xl'>₹{game.price_inr}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default XboxOne  