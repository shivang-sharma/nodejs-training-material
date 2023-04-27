const anAsyncTask = async () => {
  try {
    const user = await getUser();
    const cart = await getCart(user);

    return cart;
  } catch (error) {
    console.error(error);
  } finally {
    await cleanUp();
  }
};
