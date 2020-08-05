#lang racket
(provide (all-defined-out))

(define (expr-compare x y)
  (if (or (not (list? x)) (not (list? y)))
        (basic_check x y)
        (if (and (or (equal? (car x) 'if) (equal? (car y) 'if)) (not (equal? (car x) (car y))))
            (basic_check x y)
            (list_helper x y)
        )
  )
)

(define (list_helper x y)
  (cond
    [(null? x) x]
    [(equal? (car x) 'quote) (basic_check x y)]
    [(equal? (car y) 'quote) (basic_check x y)]
    [(and (and (member (car x) '(lambda λ)) (not (null? (cdr x))) (list? (cadr x))) (and (member (car y) '(lambda λ)) (not (null? (cdr y))) (list? (cadr y)))) (compare_lambda x y)]
    [(or (equal? (car x) 'lambda) (equal? (car y) (string->symbol "λ"))) (basic_check x y)]
    [(or (equal? (car x) 'lambda) (equal? (car y) 'lambda)) (basic_check x y)]
    [(or (equal? (car y) 'lambda) (equal? (car x) (string->symbol "λ"))) (basic_check x y)]
    [(or (equal? (car y) (string->symbol "λ")) (equal? (car x) (string->symbol "λ"))) (basic_check x y)]
    [else (no_match_helper x y)]
  )
)

;handles basic test cases from ta starter code
(define (basic_check x y) 
 (cond [(equal? x y) x]
        [(and (boolean? x) (boolean? y)) 
         (if x (if y #t '%) (if y '(not %) #f)) ]
        [else (list 'if '% x y)])
)

(define (check_bindings x y)
  (if (null? x) 
      x 
      (cons 
            (if (equal? (car x) (car y)) 
                  (car x) 
                  (string->symbol (string-append (symbol->string (car x)) "!" 
                                                  (symbol->string (car y)))))
            (check_bindings (cdr x) (cdr y)))
      )
)

(define (no_match_helper x y)
  (cond
    [(null? x) x]
    [(null? y) y]
    [(equal? (length x) (length y)) (cons (expr-compare (car x) (car y)) (no_match_helper (cdr x) (cdr y)))] 
    [else 
      (basic_check x y)]))

(define (change_args old new exp)
    (cond
      [(null? old) exp]
      [(null? new) exp]
      [else (change_args (cdr old) (cdr new) (change_variable (car old) (car new) exp))]
    ) 
)

(define (compare_lambda x y)
  (if (not (equal? (length (cadr x)) (length (cadr y))))
      (basic_check x y)
      (append (cons (check_lambda_or_symbol (car x) (car y)) 
              (cons (check_bindings (cadr x) (cadr y)) empty)) 
      (expr-compare (change_args (cadr x) 
        (check_bindings (cadr x) (cadr y)) (cddr x)) 
        (change_args (cadr y) (check_bindings (cadr x) (cadr y)) (cddr y))))
  )
)

(define (check_lambda_or_symbol x y)
  (if (not (equal? x y)) 
      (string->symbol "λ") 
      x)
)

(define (change_variable old new exp)
    (cond
    [(null? exp) exp]
    [(equal? (car exp) 'quote) exp]
    [(and (member (car exp) '(lambda λ)) (not (null? (cdr exp))) (list? (cadr exp)))
     (if (and (list? (cdr exp)) (member old (cadr exp))) exp
                             (cons (car exp) (cons (cadr exp) (change_variable old new (cddr exp)))))]
    [(list? (car exp)) (cons (change_variable old new (car exp)) (change_variable old new (cdr exp)))]
    [(equal? (car exp) old) (cons new (change_variable old new (cdr exp)))]
    [else (cons (car exp) (change_variable old new (cdr exp)))]
  )
)
;test-expr-compare x y compares results 
;taken from ta hint code
(define (test-expr-compare x y) 
  (and (equal? (eval x)
               (eval `(let ((% #t)) ,(expr-compare x y))))
       (equal? (eval y)
               (eval `(let ((% #f)) ,(expr-compare x y))))))

(define (test-expr-x)
    '(15 #t #t #f #f
           (quote (a c))
           ((lambda (a) (f a)) 1)
           ((lambda (a b) (g a)) 2)
    )
)

(define (test-expr-y)
    '(25 #t #f #t #f
            (quote (a b))
            ((λ (a) (g a)) 2)
            ((lambda (b a) (f a)) 1)
    )
)