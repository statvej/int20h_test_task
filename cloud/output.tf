# Outputs
output "kubeconfig" {
  description = "Kubeconfig for the Kubernetes cluster"
  value = <<EOT
apiVersion: v1
clusters:
- cluster:
    server: ${aws_eks_cluster.cluster.endpoint}
    certificate-authority-data: ${aws_eks_cluster.cluster.certificate_authority.0.data}
  name: kubernetes
contexts:
- context:
    cluster: kubernetes
    user: aws
  name: aws
current-context: aws
kind: Config
preferences: {}
users:
- name: aws
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      command: aws
      args:
        - "eks"
        - "get-token"
        - "--cluster-name"
        - ${aws_eks_cluster.cluster.name}
EOT
}

output "db_endpoint" {
  description = "Endpoint for the PostgreSQL database"
  value       = aws_db_instance.postgres.endpoint
}

output "loadbalancer_dns" {
  description = "DNS name of the load balancer"
  value       = aws_lb.loadbalancer.dns_name
}

output "db_secret_arn" {
  description = "ARN of the database secret in AWS Secrets Manager"
  value       = aws_secretsmanager_secret.db_secret.arn
}