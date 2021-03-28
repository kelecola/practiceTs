#include <iostream>
#include <vector>
using namespace std;
const int maxn = 510;
const int INF = 1000000000;
// 用领接表比领接矩阵省空间
vector<vector<int>> G;
//int G[maxn][maxn]; // 领接矩阵
int n ,m , st, ed, weight[maxn];
bool vis[maxn] = {false};
// 保存距离状态和救援队数量状态
int d[maxn], w[maxn] = {0}, num[maxn] = {0};
void Dijkstra(int st) {
    fill(d, d + maxn, INF);
    d[st] = 0;
    w[st] = weight[st];
    num[st] = 1;
    for (int i = 0; i < n; i++) {
        int u = -1, MIN = INF;
        // 收录顶点 0 1 3 2 4
        for (int j = 0; j < n; j++) {
            if (vis[j] == false && d[j] < MIN) {
                u = j;
                MIN = d[j];
            }
        }
        // 收录顶点完毕跳出循环
        if (u == -1) return;
        vis[u] = true;
        // 修改被影响的dist的值
        for (int v = 0; v < n; v++) {
            if (vis[v] == false && G[u][v] != INF) {
                if (d[u] + G[u][v] < d[v]) {
                    d[v] = d[u] + G[u][v];
                    w[v] = w[u] + weight[v];
                    num[v] = num[u];
                } else if (d[u] + G[u][v] == d[v]) {
                    if (w[u] + weight[v] > w[v]) {
                        w[v] = w[u] + weight[v];
                    }
                    num[v] += num[u];
                }
            }
        }
        // 收录顶点 0 1 3 2 4
//       //可用来查看每次收录一个点后的d[]的变化
//        for (int i = 0; i < n; i++) {
//            printf("%d ", d[i]);
//        }
//        cout << endl;
    }
}
int main(int argc, const char * argv[]) {
    cin >> n >> m >> st >> ed;
    for (int i = 0; i < n; i++)
        cin >> weight[i];
    int a, b, L;
//    fill(G[0], G[0] + maxn * maxn, INF); // 领接矩阵
    G.resize(n);
    for (int i = 0; i < n; i++) {
        G[i].resize(n);
        fill(G[i].begin(), G[i].end(), INF);
    }
    for (int i = 0; i < m; i++) {
        cin >> a >> b >> L;
        G[a][b] = G[b][a] = L;
    }
    // 找最短路径
    // 所求是一个点到所有点的最短距离
    Dijkstra(st);
    printf("%d %d\n", num[ed], w[ed]);
    return 0;
}
