import {Inter} from 'next/font/google';
import { Lusitana } from 'next/font/google'
import { Playwrite_NZ_Guides } from 'next/font/google'

export const inter = Inter(
    {
        subsets: ['latin']
    }
)

export const lusitana = Lusitana({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
})

export const playwrite = Playwrite_NZ_Guides(
    {
        weight: ['400'],
        //subsets: ['latin'],

    }
)