import { useForm as useReactHookForm } from 'react-hook-form';

/**
 * Custom hook that extends react-hook-form with additional functionality
 * 
 * @param {Object} options - Configuration options
 * @returns {Object} Extended form hook with Morowa-specific utilities
 */
const useForm = (options = {}) => {
  // Default validation mode to onBlur for better UX
  const defaultOptions = {
    mode: 'onBlur',
    ...options,
  };

  // Initialize react-hook-form
  const methods = useReactHookForm(defaultOptions);
  
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
    setValue,
    control,
    register,
    watch,
  } = methods;

  /**
   * Custom function to handle form errors and API responses
   * 
   * @param {Object} apiErrors - Errors returned from API
   */
  const handleApiErrors = (apiErrors) => {
    if (!apiErrors || typeof apiErrors !== 'object') return;
    
    // Map API errors to form fields
    Object.entries(apiErrors).forEach(([field, message]) => {
      setValue(field, '', { shouldValidate: true });
      // Set error manually for the field
      methods.setError(field, {
        type: 'manual',
        message: Array.isArray(message) ? message[0] : message,
      });
    });
  };

  /**
   * Helper to create a submit handler with loading state and error handling
   * 
   * @param {Function} submitFn - Form submission function
   * @param {Object} options - Options for the submit handler
   * @returns {Function} Enhanced submit handler
   */
  const createSubmitHandler = (submitFn, options = {}) => {
    const { resetAfterSubmit = false } = options;
    
    return handleSubmit(async (data) => {
      try {
        // Call the provided submit function with form data
        const result = await submitFn(data);
        
        // Reset the form if specified
        if (resetAfterSubmit) {
          reset();
        }
        
        return result;
      } catch (error) {
        // Handle API errors if they're in the expected format
        if (error?.response?.data?.errors) {
          handleApiErrors(error.response.data.errors);
        }
        
        // Re-throw the error for additional handling
        throw error;
      }
    });
  };

  return {
    ...methods,
    handleApiErrors,
    createSubmitHandler,
    isSubmitting,
    isDirty,
    isValid,
    formHasErrors: Object.keys(errors).length > 0,
  };
};

export default useForm;
