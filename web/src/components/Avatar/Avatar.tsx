import Icon from '../Icon/Icon'

const Avatar = () => {
  return (
    <div>
      <img
        src="/images/placeholders/avatar-03.png"
        alt="Placeholder"
        className="h-18 w-18 rounded-full border-avatar border-solid border-white object-cover"
      />

      <div className="center h-18 w-18 rounded-full border-avatar border-solid border-white bg-spanishGreen text-2xl font-bold text-white">
        D
      </div>

      <div className="center h-18 w-18 rounded-full border-avatar border-solid border-vistaBlue bg-spanishGreen text-2xl font-bold">
        <Icon id={'user'} size={32} color="white"></Icon>
      </div>

      <div className="relative inline-block">
        <img
          src="/images/placeholders/avatar-03.png"
          alt="Placeholder"
          className="h-18 w-18 rounded-full border-avatar border-solid border-white object-cover"
        />

        <img
          src="/images/santa-hat.png"
          alt="Santa Hat"
          className="absolute -right-[15px] -top-[19px]"
        />
      </div>

      <div className="relative inline-block">
        <img
          src="/images/placeholders/avatar-03.png"
          alt="Placeholder"
          className="h-18 w-18 rounded-full border-avatar border-solid border-white object-cover"
        />

        <div className="center h-6 w-6 rounded-full border-2 border-solid border-white bg-spanishGreen text-white">
          <Icon id={'check'} size={16}></Icon>
        </div>
      </div>
    </div>
  )
}

export default Avatar
