import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      handleMissingId: 'ignore' // or 'warn'
    }

  }
};
