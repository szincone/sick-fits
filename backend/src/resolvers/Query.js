const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db"),

  // this is a custom resolver you wrote but since it does the same thing
  // as the default one already in prisma, you can just use the prisma one
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
};

module.exports = Query;
