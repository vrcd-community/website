export default defineNuxtRouteMiddleware(async (to, form) => {
  const termType = /terms\/(.+)/.exec(to.path)?.[1]

  const versionData = await queryContent("/terms/" + termType)
    .only(["date", "_path"])
    .sort({
      date: 1,
    })
    .find()

  if (
    versionData.length &&
    versionData.findIndex((ver) => ver._path === to.path) === -1
  ) {
    return navigateTo(versionData[0]._path)
  }
})
