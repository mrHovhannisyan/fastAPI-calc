# Simple Calculator - Server


## How to start a local server 

------------------------------------------------------------------------------------------------
## Make sure you’ve got Python & pip installed on your Local machine

### Make virtual environment*

```
virtualenv venv
```

_*You'll need `virtualenv` to be installed on your system_   
```
pip install virtualenv
``` 

### Enter virtualenv shell

```shell script
source venv/bin/activate
```

### Install virtualenv dependencies

```shell script
pip install -r requirements.txt
```

### Start the server

```shell script
python run.py
```

Now it will start listening on  [http://127.0.0.1:8000/](http://127.0.0.1:8000/) address.

Navigate to  [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) for API documentation

------------------------------------------------------------------------------------------------
### For running tests, simply type

```shell script
pytest
```