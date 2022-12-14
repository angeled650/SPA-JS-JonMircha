export function PostCard(props) {
  let { date, slug, title, _embedded } = props;
  let dateFormat = new Date(date).toLocaleDateString(),
    urlPoster = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "../assets/favicon.png";

  return `
  <article class="post-card">
  <img src="${urlPoster}" alt="${title.rendered}">
  <h2>${title.rendered}</h2>
  <p>
  <time datetime="${date}">${dateFormat}</time>
  <a href="#/${slug}">Ver Publicación</a>
  </p>
  </article>
  `;
}
