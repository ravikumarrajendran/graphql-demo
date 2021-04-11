step : 1
npm run start:dev
step : 2 -> run below one in http://localhost:3000/graphql
mutation {
createCourse (
name:"dear"
startDate:"2021-04-10T22:23:35.989Z"
endDate:"2021-04-10T22:23:35.989Z"
)
  {
    name
  }
}
