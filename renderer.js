const information = document.getElementById('info')
information.innerText = `本应用的chrome版本(${versions.chrome()},node版本(${versions.node()}),electron版本(${versions.electron()}))`
const func = async () => {
  const response = await window.versions.ping()
  console.log(response)
}
func()
