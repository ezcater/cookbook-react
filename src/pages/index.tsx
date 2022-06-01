// http://localhost:3000/

import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  // Make an API call to https://cookbook.ezcater.com/api/recipes to get a list of recipes
  // and then display them below

  return (
    <>
      <h1>ezCater Cookbook</h1>
      <Link href="/new_recipe">
        <a>Create a Recipe</a>
      </Link>
    </>
  );
};

export default Home;
