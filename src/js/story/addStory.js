import CheckUserAuth from '../pages/auth/check-user-auth'
import EndpointStory from './endpointStory'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

const AddStory = {
  createRenderRoot() {
    return this
  },

  async init() {
    CheckUserAuth.checkLoginState()
    this._initialListener()
  },

  _initialListener() {
    const createStory = document.querySelector('#createStory')
    createStory.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault()
        event.stopPropagation()

        await this._createNewStory()
        this._goToHomePage() 
      },
      false
    )
  },

  async _createNewStory() {
    const submitButton = document.getElementById('submitButton')
    const loadingButton = document.getElementById('loadingButton')
    const formData = this._getFormData()
  
    if (this._validateFormData({ ...formData })) {
      try {
        submitButton.classList.add('d-none')
        loadingButton.classList.remove('d-none')
  
        const response = await EndpointStory.createNewStory({
          photo: formData.photo,
          description: formData.description
        })
  
        const successToastElement = document.getElementById('successToast')
        if (successToastElement) {
          const successToast = new bootstrap.Toast(successToastElement)
          successToast.show()
  
          const successToastBody = document.querySelector('#successToast .toast-body')
          successToastBody.textContent = response.data.message
        }
  
      } catch (error) {
        submitButton.classList.remove('d-none')
        loadingButton.classList.add('d-none')
  
        const errorToastElement = document.getElementById('errorToast')
        if (errorToastElement) {
          const errorToast = new bootstrap.Toast(errorToastElement)
          errorToast.show()
  
          const errorToastBody = document.querySelector('#errorToast .toast-body')
          if (errorToastBody && error.response && error.response.data) {
            errorToastBody.textContent = error.response.data.message
          } else {
            errorToastBody.textContent = 'An error occurred.'
          }
        }
      }
    }
  },  

  _getFormData() {
    const photo = document.querySelector('#validationFile')
    const description = document.querySelector('#validationTextArea')

    const photoFile = photo.files[0]

    return {
      photo: photoFile,
      description: description.value
    }
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '')

    return formDataFiltered.length === 0
  },

  _goToHomePage() {
    window.location.href = '/'
  }
}

export default AddStory
