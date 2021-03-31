from flask import Flask,json
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask'
mysql = MySQL(app)


@app.route("/temp")
def hello():
    cur = mysql.connection.cursor()
    cur.execute("insert into temp value ('hello world 3')")
    mysql.connection.commit()
    cur.close()
    return "insert successfully"

@app.route('/info')
def select():
    cur =mysql.connection.cursor()
    result = cur.execute("select * from info")
    arr=[]
    if(result > 0):
        data=cur.fetchall()
        for i in data:
            arr.append(i)

    # return { "name":"John", "age":30, "city":"New York"}
    return  json.dumps(arr)


@app.route('/players')
def play():
    cur =mysql.connection.cursor()
    result = cur.execute("select * from players")
    arr=[]
    if(result > 0):
        data=cur.fetchall()
        for i in data:
            arr.append(i)

    return  json.dumps(arr)

@app.route('/faq')
def faq():
    cur =mysql.connection.cursor()
    result = cur.execute("select * from queries")
    arr=[]
    if(result > 0):
        data=cur.fetchall()
        for i in data:
            arr.append(i)

    return  json.dumps(arr)


if __name__=="__main__":
    app.run(debug=True) 