import styles from "./FormControl.module.css";

export const Textarea = ({ input, meta, ...props }) => {
   const hasError = meta.error && meta.touched;
   return (
      <div>
         <div
            className={
               styles.formControl + " " + (hasError ? styles.error : " ")
            }
         >
            <div>
               <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
         </div>
      </div>
   );
};

export const Input = ({ input, meta, ...props }) => {
   const hasError = meta.error && meta.touched;
   return (
      <div>
         <div
            className={
               styles.formControl + " " + (hasError ? styles.error : " ")
            }
         >
            <div>
               <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
         </div>
      </div>
   );
};
