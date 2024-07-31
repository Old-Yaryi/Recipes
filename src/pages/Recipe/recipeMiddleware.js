const ingridentsProps = (post) => {
  return {
    title: post.name,
    INCI: post.inci.join(' / '),
    ph: post.ph,
    solubility: post.solubility.join(' / '),
    functions: post.functions.join(', '),
    descripton: post.prev_description,
  }
}
export default ingridentsProps