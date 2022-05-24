import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4'>Expense Tracker</h1>
            <p className='mt-2 text-sm text-gray-800'>A Great Starting</p>

            <form
              className='my-4 flex flex-col gap-3'
              onSubmit={(event) => {
                event.preventDefault();
                //console.log(event.target.expensedate.value);
              }}
            >
              <input
                placeholder='enter expense name'
                name='expensename'
                type='text'
              />
              <input placeholder='' type='date' name='expensedate' />
              <input
                placeholder='enter expense amount'
                type='text'
                name='expenseamount'
              />
              <button className='bg-black py-4  text-white' type='submit'>
                Add Now!
              </button>
            </form>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Navneet kaur
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
